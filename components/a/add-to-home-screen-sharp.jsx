import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ypcj-ides {
  fill: currentColor;
  d: path("m9.689 15l3.811-3.811v3.215h1V9.48H9.577v1h3.235L8.98 14.292zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="ypcj-ides"/>`,
		"fallback": "material-symbols-light:add-to-home-screen-sharp",
	});
}

export default Component;

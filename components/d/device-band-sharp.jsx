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
		"content": `<style>.tvoy1ibkt {
  fill: currentColor;
  d: path("M8.866 21V8.73h-.693V6.77h.693V3h6.25v3.77h.692v1.96h-.692V21z");
}
</style><path class="tvoy1ibkt"/>`,
		"fallback": "material-symbols-light:device-band-sharp",
	});
}

export default Component;

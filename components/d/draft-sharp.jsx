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
		"content": `<style>.i_9ck6blq {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13h5l-5-5z");
}
</style><path class="i_9ck6blq"/>`,
		"fallback": "material-symbols:draft-sharp",
	});
}

export default Component;

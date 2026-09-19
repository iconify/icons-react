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
		"content": `<style>.icxlooygs {
  fill: currentColor;
  d: path("M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z");
}
</style><path class="icxlooygs"/>`,
		"fallback": "ic:baseline-navigation",
	});
}

export default Component;

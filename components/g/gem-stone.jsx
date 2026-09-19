import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vv7pl327o {
  fill: currentColor;
  d: path("M54.5 9.454L41 4H23L9.5 9.454L2 20.057L32 60l30-39.943zM5.865 18.057l4.929-6.968L20.05 7.35l-2.82 10.708H5.865zM32 57L18.77 20.057h25.71zM43.756 7.271l9.451 3.818l4.928 6.968H46.094z");
}
</style><path class="vv7pl327o"/>`,
		"fallback": "emojione-monotone:gem-stone",
	});
}

export default Component;

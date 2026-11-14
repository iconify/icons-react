import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vtlcqibob {
  fill: currentColor;
  d: path("M20.647 7.646a.5.5 0 0 1 .707 0l7.5 7.5a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 1 1-.707-.707L27.293 16H4.707l6.647 6.647a.5.5 0 0 1-.707.707l-7.5-7.5a.5.5 0 0 1 0-.707l7.5-7.5a.5.5 0 1 1 .707.707L4.707 15h22.586l-6.646-6.646a.5.5 0 0 1 0-.708");
}
</style><path class="vtlcqibob"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-32-light",
	});
}

export default Component;

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
		"content": `<style>.rmxuf119x {
  fill: currentColor;
  d: path("M8 2a3 3 0 0 0-3 3v8.763c.34-.17.721-.263 1.117-.263H7V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1H10.982l-2.076 2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm16.586 8H20a1 1 0 0 1-1-1V4.414zM6.119 15h8.382a.5.5 0 0 1 .427.76L11.748 21h2.491a.75.75 0 0 1 .52 1.29l-8.746 8.427c-.758.73-1.985-.055-1.639-1.05L6 25H1.748a.75.75 0 0 1-.672-1.083l4.147-8.361A1 1 0 0 1 6.12 15");
}
</style><path class="rmxuf119x"/>`,
		"fallback": "fluent:document-lightning-32-regular",
	});
}

export default Component;

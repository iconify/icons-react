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
		"content": `<style>.q_8mbbbns {
  fill: currentColor;
  d: path("M17 15q-.425 0-.712-.288T16 14v-4q0-.425.288-.712T17 9h3q.425 0 .713.288T21 10v1h-1.5v-.5h-2v3h2V13H21v1q0 .425-.288.713T20 15zm-7.5 0V9h4q.425 0 .713.288T14.5 10v1q0 .425-.288.713T13.5 12q.425 0 .713.288T14.5 13v1q0 .425-.288.713T13.5 15zm1.5-3.75h2v-.75h-2zm0 2.25h2v-.75h-2zM3 15v-5q0-.425.288-.712T4 9h3q.425 0 .713.288T8 10v5H6.5v-1.5h-2V15zm1.5-3h2v-1.5h-2z");
}
</style><path class="q_8mbbbns"/>`,
		"fallback": "material-symbols:abc-outline",
	});
}

export default Component;

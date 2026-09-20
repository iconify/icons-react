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
		"content": `<style>.fb4x_nx6x {
  fill: currentColor;
  d: path("M17 9V2H8a3 3 0 0 0-3 3v10.55a3.5 3.5 0 0 1 2.5-1.05h4A3.5 3.5 0 0 1 15 18v.008a3.75 3.75 0 0 1 3.44 3.069q.06.202.06.423v7.25c0 .438-.075.859-.213 1.25H24a3 3 0 0 0 3-3V12h-7a3 3 0 0 1-3-3m2 0V2.117a3 3 0 0 1 1.293.762l5.828 5.828A3 3 0 0 1 26.883 10H20a1 1 0 0 1-1-1M5.5 18v1.5H4.25a2.25 2.25 0 0 0-2.236 2H2v7.25A2.25 2.25 0 0 0 4.25 31h10.5A2.25 2.25 0 0 0 17 28.75V21.5h-.014a2.25 2.25 0 0 0-2.236-2H13.5V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5H7V18a.5.5 0 0 1 .5-.5");
}
</style><path class="fb4x_nx6x"/>`,
		"fallback": "fluent:document-briefcase-32-filled",
	});
}

export default Component;

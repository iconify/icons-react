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
		"content": `<style>.m4qucab0m {
  fill: currentColor;
  d: path("M12 12V1h2v11zm-4 0V2h2v10zm4.5 11q-3.55 0-6.025-2.475T4 14.5V4h2v10.5q0 2.725 1.888 4.613T12.5 21t4.613-1.888T19 14.5V11q-.425 0-.712.288T18 12v4h-3q-.825 0-1.412.588T13 18v1h-2v-1q0-1.65 1.175-2.825T15 14h1V3h2v6.175q.25-.075.488-.125T19 9h2v5.5q0 3.55-2.475 6.025T12.5 23m1-8");
}
</style><path class="m4qucab0m"/>`,
		"fallback": "material-symbols:front-hand-outline-sharp",
	});
}

export default Component;

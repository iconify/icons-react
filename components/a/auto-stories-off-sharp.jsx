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
		"content": `<style>.hp0rdsbvj {
  fill: currentColor;
  d: path("m20.55 23.35l-5.1-5.1q-.95.25-1.812.688T12 20q-1.2-.95-2.6-1.475T6.5 18q-1.475 0-2.85.463T1 19.675V5.55q.275-.2.55-.362T2.1 4.9L.65 3.45l1.4-1.4l19.9 19.9zm2.45-3.2l-4.05-4.05q.525.075 1.038.2t1.012.3v-12l2 .825zM12 17.6q.45-.275.913-.5t.962-.425L12 14.8zm4.025-4.425L14 11.15V5.5l5-5v10zM12 9.15L6.85 4q1.35.05 2.65.413T12 5.5z");
}
</style><path class="hp0rdsbvj"/>`,
		"fallback": "material-symbols:auto-stories-off-sharp",
	});
}

export default Component;

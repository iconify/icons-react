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
		"content": `<style>.igataihrz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q-.001 2.9 2.049 4.951q2.051 2.051 4.951 2.051q1.786 0 3.25-.778q1.464.778 3.25.778q2.9 0 4.951-2.051T22.25 12q.001-2.9-2.049-4.951q-2.051-2.051-4.951-2.051q-1.786 0-3.25.778q-1.464-.778-3.25-.778q-2.9 0-4.951 2.051T1.75 12");
}
</style><path class="igataihrz"/>`,
		"fallback": "uix-solid:chart-venn",
	});
}

export default Component;

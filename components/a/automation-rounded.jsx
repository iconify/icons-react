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
		"content": `<style>.ox-avgbzt {
  fill: currentColor;
  d: path("M7.4 17.25q-1.05.875-2.187.8t-1.988-.775t-1.162-1.837t.412-2.338L4.35 10q-.625-.55-.987-1.325T3 7q0-1.65 1.175-2.825T7 3t2.825 1.175T11 7T9.825 9.825T7 11q-.225 0-.45-.025t-.425-.075L4.2 14.15q-.275.45-.175.888t.425.712t.775.313t.875-.313l10.5-9.025q1.05-.875 2.2-.788t2 .788t1.15 1.838t-.425 2.337L19.65 14q.625.55.988 1.325T21 17q0 1.65-1.175 2.825T17 21t-2.825-1.175T13 17t1.175-2.825T17 13q.225 0 .438.025t.412.075l1.95-3.25q.275-.45.175-.888t-.425-.712t-.775-.312t-.875.312z");
}
</style><path class="ox-avgbzt"/>`,
		"fallback": "material-symbols:automation-rounded",
	});
}

export default Component;

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
		"content": `<style>.ou-rhobly {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.818 3.068Q7.5 4.386 7.5 6.25t1.318 3.182T12 10.75t3.182-1.318T16.5 6.25t-1.318-3.182T12 1.75T8.818 3.068M12 12q3.747 0 5.389 2.657l1.964-.392l.024-.005q1.777-.296 2.335 1.378q.562 1.688-1.127 2.533q-.038.019-.079.034l-2.291.833Q17.784 22.25 12 22.25t-6.215-3.212l-2.291-.833q-.041-.015-.079-.034q-1.689-.845-1.127-2.533q.558-1.674 2.335-1.378l.024.005l1.964.392Q8.253 12 12 12");
}
</style><path class="ou-rhobly"/>`,
		"fallback": "uix-solid:claymation",
	});
}

export default Component;

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
		"content": `<style>.qtdjosb3a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.5 9q0-3-3-3t-3 3q0 1.156.446 1.867l-1.073 1.341Q5.291 12 4.5 12q-1.243 0-2.121.879Q1.5 13.757 1.5 15q0 3 3 3t3-3q0-1.156-.446-1.867l1.073-1.341Q8.709 12 9.5 12t1.373-.208l1.073 1.341Q11.5 13.844 11.5 15q0 3 3 3t3-3q0-1.156-.446-1.867l1.073-1.341Q18.709 12 19.5 12q3 0 3-3t-3-3t-3 3q0 1.156.446 1.867l-1.073 1.341Q15.291 12 14.5 12t-1.373.208l-1.073-1.341Q12.5 10.156 12.5 9");
}
</style><path class="qtdjosb3a"/>`,
		"fallback": "uix-solid:hydrocarbon",
	});
}

export default Component;

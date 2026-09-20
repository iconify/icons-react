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
		"content": `<style>.nes-3hp9j {
  fill: currentColor;
  d: path("m9.802 22l-.86-.52l3.66-5.73h4.34l1.624-5.64q.192-.644.636-1.031t1.006-.387q.777 0 1.28.596t.354 1.372l-1.419 7.032h-7.625zM20.519 7.692q-.613 0-1.037-.424t-.424-1.037t.424-1.038t1.037-.424t1.038.424t.424 1.038t-.424 1.037t-1.038.424M7.27 11.25l-.688-.708l2.863-2.927H3v-1h6.444L6.575 3.689L7.269 3l4.116 4.116z");
}
</style><path class="nes-3hp9j"/>`,
		"fallback": "material-symbols-light:car-fan-mid-right-sharp",
	});
}

export default Component;

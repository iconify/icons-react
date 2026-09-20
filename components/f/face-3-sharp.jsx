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
		"content": `<style>.p_i0fwkgi {
  fill: currentColor;
  d: path("M12 18q3.35 0 5.675-2.337T20 10q0-.967-.212-1.843t-.602-1.648q-.598.387-1.28.593t-1.406.206q-1.427 0-2.624-.728T12 4.592q-.66 1.26-1.866 1.988q-1.207.728-2.634.728q-.723 0-1.396-.206t-1.271-.573q-.39.79-.612 1.666T4 10q0 3.325 2.338 5.663T12 18m-2.113-6.113q.363-.362.363-.887t-.363-.888T9 9.75t-.888.363T7.75 11t.363.888t.887.362t.888-.363m6 0q.362-.362.362-.887t-.363-.888T15 9.75t-.888.363t-.362.887t.363.888t.887.362t.888-.363M1.48 21l1.004-10.954q.18-1.888.983-3.54T5.54 3.632t2.927-1.927T12 1t3.532.705t2.927 1.927t2.073 2.874t.984 3.54L22.519 21z");
}
</style><path class="p_i0fwkgi"/>`,
		"fallback": "material-symbols-light:face-3-sharp",
	});
}

export default Component;

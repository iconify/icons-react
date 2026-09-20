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
		"content": `<style>.xbg7cfbux {
  fill: currentColor;
  d: path("M11 9.5q.633 0 1.066-.434Q12.5 8.633 12.5 8t-.434-1.066Q11.633 6.5 11 6.5t-1.066.434T9.5 8t.434 1.066Q10.367 9.5 11 9.5m.02 4q.836 0 1.612-.312t1.405-.898q-.78-.401-1.54-.596t-1.478-.194q-.91 0-1.709.204t-1.327.586q.61.587 1.385.899t1.651.311m10.158 7.404l-5.258-5.258q-1.102.896-2.272 1.375T11 17.5q-3.139 0-5.32-2.18T3.5 10t2.18-5.32T11 2.5t5.32 2.18T18.5 10q0 1.477-.488 2.657t-1.385 2.282l5.258 5.238z");
}
</style><path class="xbg7cfbux"/>`,
		"fallback": "material-symbols-light:data-loss-prevention-sharp",
	});
}

export default Component;

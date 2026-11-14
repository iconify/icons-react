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
		"content": `<style>.zkoxgbzhn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.53 1.97q1.97 1.969 1.97 3.28q0 1.036-.732 1.768q-.452.451-1.018.624V9h1.875q2.123 0 3.624 1.501t1.501 3.624v3q0 2.123-1.501 3.624t-3.624 1.501h-5.25q-2.123 0-3.624-1.501T4.25 17.125v-3q0-2.123 1.501-3.624T9.375 9h1.875V7.683Q9.5 7.342 9.5 5.25q0-1.311 1.97-3.28q.105-.106.243-.163T12 1.75t.287.057t.243.163M9.5 12.75q-2.25 0-2.25 2.25v1q0 2.25 2.25 2.25h5q2.25 0 2.25-2.25v-1q0-2.25-2.25-2.25z");
}
</style><path class="zkoxgbzhn"/>`,
		"fallback": "uix-solid:candle-jar",
	});
}

export default Component;

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
		"content": `<style>.latad28ce {
  fill: currentColor;
  d: path("M9.549 17.548q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m-6-3q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m-7.933-3.163h8.769V11q0-1.806-1.29-3.095T12 6.615t-3.095 1.29T7.615 11zm.934-.885q.2-1.275 1.163-2.137T12 7.5t2.288.863T15.45 10.5zM3 21V3h18v18zm1-1h16V4H4zm0 0V4z");
}
</style><path class="latad28ce"/>`,
		"fallback": "material-symbols-light:bathroom-outline-sharp",
	});
}

export default Component;

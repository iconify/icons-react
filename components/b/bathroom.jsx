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
		"content": `<style>.z0rmagdzr {
  fill: currentColor;
  d: path("M9.549 17.548q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m-6-3q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m3 0q.22-.222.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22t.547-.221m-7.933-3.163h8.769V11q0-1.806-1.29-3.095T12 6.615t-3.095 1.29T7.615 11zm-3 9.615q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21z");
}
</style><path class="z0rmagdzr"/>`,
		"fallback": "material-symbols-light:bathroom",
	});
}

export default Component;

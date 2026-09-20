import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hk1qe3bcx {
  fill: currentColor;
  d: path("M16 8.5a.5.5 0 0 0-1 0v8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H16zM30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-1 0c0-7.18-5.82-13-13-13S3 8.82 3 16s5.82 13 13 13s13-5.82 13-13");
}
</style><path class="hk1qe3bcx"/>`,
		"fallback": "fluent:clock-32-light",
	});
}

export default Component;

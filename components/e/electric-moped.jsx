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
		"content": `<style>.zith5nbvo {
  fill: currentColor;
  d: path("M5.423 15.885q-.73-.731-.73-1.77h-2v-2.5q0-1.457 1.02-2.478t2.48-1.021h3.5v5h4.23l3.77-4.658V5.923q0-.27-.174-.442t-.442-.173h-2.385v-1h2.385q.671 0 1.143.472t.472 1.143v2.85l-4.23 5.343h-4.77q0 1.038-.73 1.768q-.731.731-1.77.731t-1.769-.73m2.828-.711q.441-.441.441-1.059h-3q0 .618.442 1.059q.441.441 1.058.441t1.059-.441M5.692 6.308v-1h4v1zm11.347 9.577q-.731-.731-.731-1.77q0-1.038.73-1.769t1.77-.73t1.769.73t.73 1.77t-.73 1.769t-1.77.73t-1.768-.73m2.827-.711q.442-.441.442-1.058q0-.618-.442-1.06q-.441-.44-1.058-.44t-1.059.44t-.441 1.06t.441 1.058t1.059.442t1.058-.442m-6.828 7.48l-5.115-2.577h3.385v-1.73l5.115 2.576h-3.384z");
}
</style><path class="zith5nbvo"/>`,
		"fallback": "material-symbols-light:electric-moped",
	});
}

export default Component;

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
		"content": `<style>.a-6anwbdw {
  fill: currentColor;
  d: path("M4 19.5v-1h11v1zm8.818-8.315Q11.5 9.869 11.5 8.002t1.316-3.185T15.997 3.5q1.867 0 3.185 1.316Q20.5 6.13 20.5 7.997t-1.315 3.185t-3.182 1.318t-3.185-1.315M4 11.5v-1h5.377q.098.28.217.521q.12.24.272.479zm0 4v-1h9.266q.401.177.84.309t.894.193v.498zm11.616-4.615h.769V7.307h-.77zm.734-4.843q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15t-.15.35t.15.35t.35.15t.35-.15");
}
</style><path class="a-6anwbdw"/>`,
		"fallback": "material-symbols-light:data-info-alert-outline-sharp",
	});
}

export default Component;

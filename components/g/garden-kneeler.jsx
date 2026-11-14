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
		"content": `<style>.b481jeuve {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 5.25h16.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v3q0 .114-.034.224l-2.5 8q-.045.142-.14.257q-.096.114-.228.183q-.149.079-.318.085l-.03.001H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T1.75 17v-3q0-.114.034-.224l2.5-8q.018-.057.044-.11q.027-.053.062-.102q.034-.048.076-.091t.09-.077q.048-.036.101-.063t.109-.046q.057-.018.116-.028Q4.94 5.25 5 5.25M12.75 8q-2 0-2 2t2 2h2q2 0 2-2t-2-2zm-9.5 6.75v1.5h15v-1.5z");
}
</style><path class="b481jeuve"/>`,
		"fallback": "uix-solid:garden-kneeler",
	});
}

export default Component;

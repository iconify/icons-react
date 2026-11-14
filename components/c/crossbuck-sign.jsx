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
		"content": `<style>.up_fsr2oe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m8.078 8.25l-2.693 1.886q-1.843 1.291-.552 3.133t3.133.552l3.284-2.299V21.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-9.978l3.284 2.299q1.842 1.291 3.133-.552t-.552-3.133L15.922 8.25l2.693-1.886q1.843-1.291.552-3.133t-3.133-.552L12 5.503L7.966 2.679q-1.842-1.291-3.133.552t.552 3.133z");
}
</style><path class="up_fsr2oe"/>`,
		"fallback": "uix-solid:crossbuck-sign",
	});
}

export default Component;

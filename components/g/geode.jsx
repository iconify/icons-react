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
		"content": `<style>.n02qaebnz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m8.499 2.671l4.608-.355q1.074-.082 1.996.472l3.449 2.069q1.071.642 1.466 1.827l1.459 4.378q.3.901.087 1.826l-1.02 4.422q-.404 1.748-2.078 2.391l-4.561 1.754q-.819.315-1.688.19l-4.962-.708q-1.751-.25-2.542-1.832l-2.056-4.112q-.423-.846-.344-1.789L2.68 8.81q.093-1.121.84-1.962l2.715-3.054q.906-1.019 2.264-1.123m-.863 6.567Q5.75 10.781 5.75 13t1.886 3.762Q9.454 18.25 12 18.25t4.364-1.488Q18.25 15.219 18.25 13t-1.886-3.762Q14.546 7.75 12 7.75T7.636 9.238");
}
</style><path class="n02qaebnz"/>`,
		"fallback": "uix-solid:geode",
	});
}

export default Component;

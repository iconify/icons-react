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
		"content": `<style>.xxftxgwwq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.783 10.641q-.883.898-1.313 1.329l-5.25 5.25q-1.781 1.78 0 3.56q.737.738 1.78.738t1.78-.738l5.25-5.249v-.001q.016-.015.031-.032l4-4.5q2.848-3.205 4.604-2.327q.073.037.153.057q.072.018.146.021q.073.004.146-.007t.143-.036t.133-.063t.118-.088t.099-.109t.075-.126q.032-.066.05-.138q.443-1.774-.032-2.961Q21.108 3.75 19.5 3.75q-2.944 0-9.717 6.891M4.28 18.28L9 13.561L10.439 15L5.72 19.72q-.72.719-1.44 0q-.719-.72 0-1.44");
}
</style><path class="xxftxgwwq"/>`,
		"fallback": "uix-solid:garden-knife",
	});
}

export default Component;

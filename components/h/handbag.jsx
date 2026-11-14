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
		"content": `<style>.ht6-i_j3k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.24 9.377q.017.105.005.211t-.054.204t-.109.181t-.155.144l-6.5 4.5q-.094.065-.203.099T12 14.75t-.224-.034t-.203-.099l-6.5-4.5q-.088-.061-.155-.144t-.109-.181t-.054-.204t.005-.211l-1.5 9q-.01.061-.01.123q0 2.75 2.75 2.75h12q2.75 0 2.75-2.75q0-.062-.01-.123zM5.5 8.75q.234 0 .427.133L12 13.088l6.073-4.205q.192-.133.427-.133h-2.25V8q0-1.76-1.245-3.005T12 3.75T8.995 4.995T7.75 8v.75zm3.75 0V8q0-2.75 2.75-2.75q1.139 0 1.945.805q.805.806.805 1.945v.75z");
}
</style><path class="ht6-i_j3k"/>`,
		"fallback": "uix-solid:handbag",
	});
}

export default Component;

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
		"content": `<style>.ivb4j2bcy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.367 4.264q-1.179-1.458-1.775-2.224q-.058-.074-.132-.132q-.058-.045-.124-.078q-.066-.034-.137-.053q-.071-.02-.145-.025t-.147.004t-.143.032t-.135.06t-.12.085t-.101.107q-.596.766-1.775 2.224Q4.25 10.921 4.25 14.5q0 3.236 2.257 5.493T12 22.25t5.493-2.257T19.75 14.5q0-3.579-5.383-10.236M7.75 13.25q0-2 2-2t2 2t-2 2t-2-2m6.5-2q.828 0 1.414.586t.586 1.414t-.586 1.414t-1.414.586q-2 0-2-2t2-2m-4.25 6q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="ivb4j2bcy"/>`,
		"fallback": "uix-solid:cholesterol",
	});
}

export default Component;

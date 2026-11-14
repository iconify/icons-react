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
		"content": `<style>.bsjsl7bia {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 10V4.5q0-.112.033-.22q.033-.107.096-.2t.151-.164t.191-.112l3.75-1.5q.069-.028.142-.041t.146-.013q.074.001.146.016q.073.016.14.045t.129.071q.061.041.113.094q.051.053.092.115q.04.062.067.13q.045.112.053.232l.206 3.297H20q.084 0 .165.018q.082.019.157.055q.076.036.142.088q.066.051.118.116l.018.023q.073.097.112.213q.038.115.038.237v11.5q0 .087-.02.172t-.059.163q-.039.079-.095.146t-.126.119l-4 3q-.119.09-.264.127q-.144.037-.292.015q-.198-.028-.356-.151q-.439.159-1.038.159h-10q-2.25 0-2.25-2.25v-8.5q0-.532.215-.975q-.032-.032-.059-.067L2.4 10.45q-.073-.097-.112-.213q-.038-.115-.038-.237m3.816-5.919l-2.316.927V8.5l2.476-1.857zM17.75 7.75H7.25l-2 1.5h9.25q.599 0 1.038.159l.012-.009zm-1.15 2.738q.15.431.15 1.012V20l2.5-1.875V8.5z");
}
</style><path class="bsjsl7bia"/>`,
		"fallback": "uix-solid:cardboard-model",
	});
}

export default Component;

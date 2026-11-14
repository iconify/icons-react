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
		"content": `<style>.t_zs16b_m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.843 3.267q7.157-1.534 14.314 0q.098.021.186.066q.089.046.162.113t.128.151q.053.084.083.179q2.57 8.224 0 16.448q-.03.095-.083.179t-.128.151q-.073.067-.162.113q-.088.045-.186.066q-7.157 1.534-14.314 0q-.098-.021-.186-.066q-.089-.046-.162-.113t-.128-.151q-.053-.084-.083-.179q-2.57-8.224 0-16.448q.03-.095.083-.179t.128-.151q.073-.067.162-.113q.088-.045.186-.066M8.5 10.25q-2.75 0-2.75 2.75t2.75 2.75T11.25 13T8.5 10.25M12.75 13q0 2.75 2.75 2.75T18.25 13t-2.75-2.75T12.75 13");
}
</style><path class="t_zs16b_m"/>`,
		"fallback": "uix-solid:changing-bag",
	});
}

export default Component;

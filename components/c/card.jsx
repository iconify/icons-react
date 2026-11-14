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
		"content": `<style>.xxx9emnko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 4.75H4.5q-1.139 0-1.945.805q-.805.806-.805 1.945v9q0 2.75 2.75 2.75h15q2.75 0 2.75-2.75V10q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H19q-2.75 0-2.75-2.75V5.5q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T17 4.75m.53.22q.106.105.163.243t.057.287V8q0 1.25 1.25 1.25h2.5q.149 0 .287.057t.243.163z");
}
</style><path class="xxx9emnko"/>`,
		"fallback": "uix-solid:card",
	});
}

export default Component;

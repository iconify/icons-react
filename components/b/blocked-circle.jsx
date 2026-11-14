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
		"content": `<style>.kf195bcii {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.566 4.943Q1.75 7.888 1.75 12q0 4.246 3.002 7.248T12 22.25q4.112 0 7.057-2.816q-.104.047-.217.061t-.225-.007t-.214-.074t-.181-.134L4.72 5.78q-.081-.08-.134-.181t-.074-.214q-.02-.112-.007-.225t.061-.217m.377-.377q.104-.047.217-.061t.225.007q.113.021.214.074t.181.134l13.5 13.5q.081.08.134.181t.074.214t.007.225t-.061.217Q22.25 16.112 22.25 12q0-4.246-3.002-7.248T12 1.75q-4.112 0-7.057 2.816");
}
</style><path class="kf195bcii"/>`,
		"fallback": "uix-solid:blocked-circle",
	});
}

export default Component;

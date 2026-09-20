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
		"content": `<style>.nf36vabuf {
  fill: currentColor;
  d: path("M12 16.5q1.875 0 3.188-1.312T16.5 12t-1.312-3.187T12 7.5T8.813 8.813T7.5 12t1.313 3.188T12 16.5m-.712-3.787Q11 12.425 11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13t-.712-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="nf36vabuf"/>`,
		"fallback": "material-symbols:album",
	});
}

export default Component;

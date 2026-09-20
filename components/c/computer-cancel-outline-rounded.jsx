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
		"content": `<style>.q_pk6iaaz {
  fill: currentColor;
  d: path("m12 11.9l1.875 1.9q.3.3.713.3t.712-.3t.3-.712t-.3-.713L13.4 10.5l1.9-1.875q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3L12 9.1l-1.875-1.9q-.3-.3-.712-.3t-.713.3t-.3.713t.3.712l1.9 1.875l-1.9 1.875q-.3.3-.3.713t.3.712t.713.3t.712-.3zM2 21q-.425 0-.712-.288T1 20t.288-.712T2 19h20q.425 0 .713.288T23 20t-.288.713T22 21zm2-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z");
}
</style><path class="q_pk6iaaz"/>`,
		"fallback": "material-symbols:computer-cancel-outline-rounded",
	});
}

export default Component;

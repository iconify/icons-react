import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kydqj6hyx.css';
import '../../css/c/cobmfeb6t.css';
import '../../css/n/nj3ei-_1i.css';
import '../../css/p/pgd5l14zz.css';
import '../../css/g/gm7kzabeb.css';
import '../../css/u/utt9jeklo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kydqj6hyx"/><path class="cobmfeb6t"/><path class="nj3ei-_1i"/><path class="pgd5l14zz"/><rect class="gm7kzabeb"/><rect transform="rotate(90 18.75 3.25)" class="utt9jeklo"/></g>`,
		"fallback": "lets-icons:group-add-light",
	});
}

export default Component;

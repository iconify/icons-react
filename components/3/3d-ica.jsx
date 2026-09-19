import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp4swqbih.css';
import '../../css/e/eqknogzek.css';
import '../../css/y/yt45lhzdn.css';
import '../../css/g/gtw35cbvt.css';
import '../../css/i/igjaafi1z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp4swqbih"/><path class="eqknogzek"/><path class="yt45lhzdn"/><path class="gtw35cbvt"/><path class="igjaafi1z"/>`,
		"fallback": "carbon:3d-ica",
	});
}

export default Component;

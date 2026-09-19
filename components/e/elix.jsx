import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amduqc0dt.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rogwawkzk.css';
import '../../css/s/stxaasbpx.css';
import '../../css/g/gxcfmpble.css';
import '../../css/m/muh6_ibba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="amduqc0dt"/><g class="n1mjunbsu"><path class="rogwawkzk"/><path class="stxaasbpx"/><path class="gxcfmpble"/><path class="muh6_ibba"/></g></g>`,
		"fallback": "cryptocurrency-color:elix",
	});
}

export default Component;

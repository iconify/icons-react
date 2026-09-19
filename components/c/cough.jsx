import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7ghh79r.css';
import '../../css/d/de_z1ibok.css';
import '../../css/m/mowsr8bxn.css';
import '../../css/l/laf24vzlh.css';
import '../../css/p/pmr8ioscg.css';
import '../../css/l/lt1tc0r_w.css';
import '../../css/w/wyzehsq6r.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr7ghh79r"/><circle class="de_z1ibok"/><circle class="mowsr8bxn"/><circle class="laf24vzlh"/><circle class="pmr8ioscg"/><circle class="lt1tc0r_w"/><circle class="wyzehsq6r"/><path class="i2ck-cb3c"/>`,
		"fallback": "carbon:cough",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7r9_tltf.css';
import '../../css/f/fvl116dqi.css';
import '../../css/z/zzyvr35-a.css';
import '../../css/b/b2ubnpijm.css';
import '../../css/g/g70bjd1je.css';
import '../../css/h/hcvnyvbjh.css';
import '../../css/l/l46r_-b6n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7r9_tltf"/><path class="fvl116dqi"/><path class="zzyvr35-a"/><path class="b2ubnpijm"/><path class="g70bjd1je"/><path class="hcvnyvbjh"/><path class="l46r_-b6n"/>`,
		"fallback": "devicon:devicon-wordmark",
	});
}

export default Component;

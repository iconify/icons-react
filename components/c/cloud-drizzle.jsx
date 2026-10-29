import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crecepuob.css';
import '../../css/r/ru8yytb_a.css';
import '../../css/h/hnlo6mb_q.css';
import '../../css/o/okd6m0p8b.css';
import '../../css/b/b4yjfqbmu.css';
import '../../css/l/lgcp1rrwr.css';
import '../../css/h/hmds5cbkv.css';
import '../../css/s/shc6wbcaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crecepuob wm-shadow"/><path class="ru8yytb_a wm-k"/><path class="hnlo6mb_q wm-k"/><path class="okd6m0p8b wm-k"/><path class="b4yjfqbmu wm-k"/><path class="lgcp1rrwr wm-k"/><path class="hmds5cbkv wm-shine"/><path class="shc6wbcaj wm-a"/>`,
		"fallback": "withicons-pastel:cloud-drizzle",
	});
}

export default Component;

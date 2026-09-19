import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-tsvfb5f.css';
import '../../css/a/aor8e_ljs.css';
import '../../css/k/kd5oxwbto.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/u/u12k9bhui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-tsvfb5f"/><path class="aor8e_ljs"/><path class="kd5oxwbto"/><path class="ltsbsuq_l"/><path class="u12k9bhui"/></g>`,
		"fallback": "fluent-emoji-flat:dollar-banknote",
	});
}

export default Component;

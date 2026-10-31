import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ig1m9d7st.css';
import '../../css/k/khmybxbgv.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ig1m9d7st"/><path class="khmybxbgv wm-shine"/><path class="jstsvibwd wm-k"/><path class="n8lapqogo wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dumpling",
	});
}

export default Component;

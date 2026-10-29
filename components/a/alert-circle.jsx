import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/m/mgh33dbtm.css';
import '../../css/c/cj-tp6byg.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/v/vlrtexz9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="mgh33dbtm wm-k"/><path class="cj-tp6byg wm-k"/><path class="jfytd4b0q wm-shine"/><path class="vlrtexz9o wm-a"/></g>`,
		"fallback": "withicons-anime:alert-circle",
	});
}

export default Component;

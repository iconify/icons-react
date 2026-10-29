import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju6yqmb-s.css';
import '../../css/r/rwwvcj8jo.css';
import '../../css/a/a_kn3ubhj.css';
import '../../css/k/kt5b-ctsz.css';
import '../../css/g/gazno2b8n.css';
import '../../css/o/os7-tutyf.css';
import '../../css/g/g1nae6bgt.css';
import '../../css/q/qo1owbc9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju6yqmb-s wm-shadow"/><path class="rwwvcj8jo wm-k"/><path class="a_kn3ubhj wm-k"/><path class="kt5b-ctsz wm-k"/><path class="gazno2b8n wm-k"/><path class="os7-tutyf wm-k"/><path class="g1nae6bgt wm-shine"/><path class="qo1owbc9v wm-a"/>`,
		"fallback": "withicons-pastel:file-input",
	});
}

export default Component;

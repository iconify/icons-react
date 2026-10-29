import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku7171sjo.css';
import '../../css/p/puz6dx0rk.css';
import '../../css/h/h51rxinlw.css';
import '../../css/j/jlpkn5nks.css';
import '../../css/y/ynh0jzbsn.css';
import '../../css/b/b9emh-jsm.css';
import '../../css/a/ay80_0hhn.css';
import '../../css/l/lohe0sbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku7171sjo wm-shadow"/><path class="puz6dx0rk wm-k"/><path class="h51rxinlw wm-k"/><path class="jlpkn5nks wm-a"/><path class="wm-a ynh0jzbsn"/><path class="b9emh-jsm wm-a"/><path class="ay80_0hhn wm-a"/><path class="lohe0sbse wm-a"/>`,
		"fallback": "withicons-pastel:align-top",
	});
}

export default Component;

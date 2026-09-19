import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/heden_zra.css';
import '../../css/n/nfg3sbdil.css';
import '../../css/j/j9k7fib3v.css';
import '../../css/n/n1s8tov8a.css';
import '../../css/k/ktg_pka8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJOYmpdtT"><g class="wwvp95byt"><rect class="heden_zra"/><path class="nfg3sbdil"/><path class="j9k7fib3v"/><path class="n1s8tov8a"/><path class="ktg_pka8r"/></g></mask></defs><path mask="url(#SVGJOYmpdtT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calendar-dot",
	});
}

export default Component;

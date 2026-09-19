import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_fh5517m.css';
import '../../css/n/ncnkpacjq.css';
import '../../css/f/fcdvm57xw.css';
import '../../css/s/s215cnbbv.css';
import '../../css/k/kkjyhz4us.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpFntBcaT"><g class="ft5dv1b6b"><path class="n_fh5517m"/><circle class="ncnkpacjq"/><circle class="fcdvm57xw"/><circle class="s215cnbbv"/><circle class="kkjyhz4us"/></g></mask></defs><path mask="url(#SVGpFntBcaT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:frog",
	});
}

export default Component;

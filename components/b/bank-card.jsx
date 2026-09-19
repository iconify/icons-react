import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p22wnqbnw.css';
import '../../css/f/f1nl8yjrl.css';
import '../../css/q/q9fzk183f.css';
import '../../css/g/g9ouegxjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSpd8pdZy"><g class="ufeehvblu"><path class="p22wnqbnw"/><path class="f1nl8yjrl"/><path class="q9fzk183f"/><path class="g9ouegxjn"/></g></mask></defs><path mask="url(#SVGSpd8pdZy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bank-card",
	});
}

export default Component;

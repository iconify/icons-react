import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alg4frbdg.css';
import '../../css/e/edz9x2t2i.css';
import '../../css/j/j-9daokrk.css';
import '../../css/p/pwkgwrprc.css';
import '../../css/m/mijbqjb5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpnT53cib"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="alg4frbdg"/><path class="edz9x2t2i"/><path class="j-9daokrk"/><path class="pwkgwrprc"/><path class="mijbqjb5v"/></g></mask></defs><path mask="url(#SVGpnT53cib)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:injection",
	});
}

export default Component;

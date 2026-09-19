import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/dvcapvbcu.css';
import '../../css/m/met-ksu1r.css';
import '../../css/p/peimmofsp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWrHFzcHE"><g class="s9cl3zbei"><circle class="dvcapvbcu"/><path class="met-ksu1r"/><path class="peimmofsp"/></g></mask></defs><path mask="url(#SVGWrHFzcHE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:candy",
	});
}

export default Component;

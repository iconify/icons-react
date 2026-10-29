import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vym85-brq.css';
import '../../css/a/a6vkp3z-m.css';
import '../../css/o/o3_va7_-y.css';
import '../../css/b/bzim1zgug.css';
import '../../css/i/iylvm580d.css';
import '../../css/m/mbjyhccgo.css';
import '../../css/m/mhzge1b9l.css';
import '../../css/z/zas8eqbfu.css';
import '../../css/z/ztoz7sbew.css';
import '../../css/a/a4nj3phty.css';
import '../../css/t/twsovlx6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vym85-brq wm-shadow"/><path class="a6vkp3z-m wm-a"/><path class="o3_va7_-y wm-k"/><path class="bzim1zgug wm-k"/><path class="iylvm580d wm-k"/><path class="mbjyhccgo wm-k"/><path class="mhzge1b9l wm-shine"/><path class="wm-k zas8eqbfu"/><path class="wm-a ztoz7sbew"/><path class="a4nj3phty wm-a"/><path class="twsovlx6u wm-a"/>`,
		"fallback": "withicons-plush:arrow-down",
	});
}

export default Component;
